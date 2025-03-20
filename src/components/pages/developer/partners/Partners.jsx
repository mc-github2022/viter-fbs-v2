import React from 'react'
import { StoreContext } from '../../../store/StoreContext';
import { setIsAdd } from '../../../store/StoreAction';
import Navigation from '../../../partials/dashboard/Navigation';
import Dashboard from '../../../partials/dashboard/Dashboard';
import { FaPlus } from 'react-icons/fa';
import ModalSuccess from '../../../partials/modals/ModalSuccess';
import ModalError from '../../../partials/modals/ModalError';
import PartnersTable from './PartnersTable';
import ModalAddPartners from './ModalAddPartners';

const Partners = () => {
    const { store, dispatch } = React.useContext(StoreContext);
    const [itemEdit, setItemEdit] = React.useState(null);
  
    const handleAdd = () => {
      dispatch(setIsAdd(true));
      setItemEdit(null);
    };
  return (
    <>
    <section id="partners" className="bg-[#f5f5f3]">
      <Navigation menu="partners" />
      <Dashboard>
        <div className="mx-5 pt-2">
          <div className="py-5 flex justify-between ">
            <div className="text-sm text-[black] font-semibold">
              <h2>Partners</h2>
            </div>
            <button
              className="flex items-center gap-1 text-[white] hover:underline py-1 px-2 bg-primary rounded-lg text-sm"
              onClick={handleAdd}
            >
              <FaPlus />
              Add
            </button>
          </div>
          <div className="pb-4">
            <PartnersTable setItemEdit={setItemEdit} />
          </div>
        </div>
      </Dashboard>
    </section>

    {store.isAdd && (
      <ModalAddPartners setIsAdd={setIsAdd} itemEdit={itemEdit} setItemEdit={setItemEdit}/>
    )}
    {store.success && <ModalSuccess />}
    {store.error && <ModalError />}
  </>
  )
}

export default Partners
