import DaftarSayaFragments from '../../component/UI/Fragments/DaftarSayaFragments';
import CardThumbnail from '../../component/UI/Elements/Card/CardThumbnail';
import Header from '../../component/header';
import { useEffect, useState } from 'react';
import Footer from '../../component/footer';
import useFetch from '../../component/hooks/useFetch';
import useDeleteDaftarSaya from '../../component/hooks/useDeleteDaftarSaya';

const DaftarSaya = () => {
  const [listdaftarsaya, setListDaftarSaya] = useState([]);
  const { deleteDaftarSaya } = useDeleteDaftarSaya("daftarsaya");

  const { data, isLoading, isError } = useFetch("daftarsaya");

  useEffect(() => {
    if (data) {
      setListDaftarSaya(data);
    }
  }, [data]);

  const handleDelete = async (idf) => {
    await deleteDaftarSaya(idf);
    setListDaftarSaya((prevList) => prevList.filter((item) => item.idf !== idf));
  };

  return (
    <div>
      <Header />
      <DaftarSayaFragments title="Daftar Saya">
        {isLoading ? (
          <p>Loading...</p>
        ) : isError ? (
          <p>There was an error fetching the list.</p>
        ) : listdaftarsaya && listdaftarsaya.length > 0 ? (
          listdaftarsaya.map((movie, index) => (
            <CardThumbnail key={index} {...movie} removeDaftarSaya={() => handleDelete(movie.idf)} />
          ))
        ) : (
          <p>Tidak ada film yang ditambahkan</p>
        )}
      </DaftarSayaFragments>
      <Footer />
    </div>
  );
};

export default DaftarSaya;
