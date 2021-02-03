import { useState } from 'react';
import CretifyOrder from '../components/CretifyOrder/CretifyOrder';
import OrderSuccessModal from '../components/OrderSuccessModal/OrderSuccessModal';

export default function CretifyView() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <section>
      <h2>CretifyView</h2>
      <CretifyOrder onOpenModal={setIsOpenModal} />
      {isOpenModal ? <OrderSuccessModal onOpenModal={setIsOpenModal} /> : null}
    </section>
  );
}
