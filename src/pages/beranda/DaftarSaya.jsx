
import DaftarSayaFragments from '../../component/UI/Fragments/DaftarSayaFragments';
import CardThumbnail from '../../component/UI/Elements/Card/CardThumbnail';
import Header from '../../component/header';
import { useEffect } from 'react';
import Footer from '../../component/footer';
import useDaftarSaya from '../../component/hooks/useDaftarSaya';

const DaftarSaya = () => {
  const {listdaftarsaya, removeDaftarSaya} = useDaftarSaya("daftarsaya")

  useEffect (() => {
  
    console.log(listdaftarsaya)
  },[listdaftarsaya])
  return (
    <div>
    <Header />
    <DaftarSayaFragments title="Daftar Saya">
      {listdaftarsaya && listdaftarsaya.length > 0 ? (
        listdaftarsaya.map((movie, index) => (
          <CardThumbnail key={index} {...movie} removeDaftarSaya={removeDaftarSaya} />
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
