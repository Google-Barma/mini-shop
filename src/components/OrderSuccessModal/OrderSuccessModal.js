import s from './OrderSuccessModal.module.css';

export default function OrderSuccessModal({ onOpenModal }) {
  return (
    <div className={s.overlay}>
      <div className={s.modal}>
        <h2>Order success!</h2>
        <button type="button" onClick={() => onOpenModal(false)}>
          close
        </button>
      </div>
    </div>
  );
}
