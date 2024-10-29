import React from 'react'
import { setIsAdd, setIsWhyFBS } from '../../../../store/StoreAction';
import { StoreContext } from '../../../../store/StoreContext';
import Navigation from '../../../../partials/dashboard/Navigation';

const EventsAndActivities = () => {
    const { store, dispatch } = React.useContext(StoreContext);
  const [itemEdit, setItemEdit] = React.useState(null);

  const handleAdd = () => {
    dispatch(setIsAdd(true));
    setItemEdit(null);
  };

  React.useEffect(() => {
    dispatch(setIsWhyFBS(true));
  }, []);

  return (
    <>
    <section id="whyFBS" className="bg-[#f5f5f3]">
      <Navigation menu="whyFBS" submenu="home-insights" />
      <Dashboard>
        <div className="mx-5 pt-2">
          <div className="py-5 flex justify-between ">
            <div className="text-[24px] text-[black]">
              <h2>Insights</h2>
            </div>
            <button
              className="flex items-center gap-1 text-[white] hover:underline bg-[black] px-2 rounded-lg"
              onClick={handleAdd}
            >
              <FaPlus />
              Add
            </button>
          </div>
          <div className="pb-4">
            <InsightsTable setItemEdit={setItemEdit}/>
          </div>
        </div>
      </Dashboard>
    </section>

    {store.isAdd && <ModalAddInsights setIsAdd={setIsAdd} itemEdit={itemEdit} />}
    {store.success && <ModalSuccess />}
    {store.error && <ModalError />}
  </>
  )
}

export default EventsAndActivities
