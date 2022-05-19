export default function Modal({ title, modalOpen, setModalOpen }) {
  return modalOpen ? (
    <div>
      {title}
      <button onClick={() => setModalOpen(false)}>close</button>
    </div>
  ) : null;
}
