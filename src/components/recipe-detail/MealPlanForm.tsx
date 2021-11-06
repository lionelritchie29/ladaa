import { getUnixTime } from 'date-fns';
import React, { useContext, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { AuthContext } from '../../contexts/AuthContext';
import { ModalContext } from '../../contexts/ModalContext';
import { ToastContext, ToastContextType } from '../../contexts/ToastContext';
import { MealSlot } from '../../models/enum/meal-slot';
import { Recipe } from '../../models/recipe';
import MealPlanService from '../../services/api/meal-plan-service';
import CustomListBox from '../home/CustomListBox';

type props = {
  mealPlanService: MealPlanService;
  recipe: Recipe;
};

const MealPlanForm = ({ mealPlanService, recipe }: props) => {
  const [date, setDate] = useState(new Date());
  const types = [{ name: 'Breakfast' }, { name: 'Lunch' }, { name: 'Dinner' }];
  const [selectedType, setSelectedType] = useState(types[0].name);
  const [makeToast, makeToastPromise, dismissToast] = useContext(
    ToastContext,
  ) as ToastContextType;
  const [loggedUser, setLoggedUser] = useContext(AuthContext);
  const [modal, setModal] = useContext(ModalContext);

  const addToMealPlan = async (e: any) => {
    e.preventDefault();
    const slot: MealSlot =
      selectedType === 'Breakfast'
        ? MealSlot.BREAKFAST
        : selectedType === 'Lunch'
        ? MealSlot.LUNCH
        : MealSlot.DINNER;

    if (loggedUser === null) {
      makeToast('You must log in to be able to use this feature!', 'error');
    } else {
      console.log({ loggedUser, date, slot, recipe });
      await makeToastPromise(
        mealPlanService.addToMealPlan(loggedUser, date, slot, recipe),
        {
          success: 'Succesfully added recipe to the meal plan!',
          pending: 'We are processing your request, please wait...',
          error: 'Ups, something is wrong when adding to the meal plan',
        },
      );
      setModal({
        show: false,
        title: '',
        content: '',
      });
    }
  };

  return (
    <form className='p-4'>
      <div>
        <label className='w-1/4'>For What ?</label>
        <CustomListBox items={types} setSelected={setSelectedType} />
      </div>

      <div className='mt-4'>
        <label className='w-1/4'>For When ?</label>
        <DatePicker
          className='sm:text-sm w-full rounded border border-gray-300 px-3 py-2'
          selected={date}
          onChange={(date: Date) => setDate(date)}
        />
      </div>

      <div className='text-right mt-3'>
        <button
          onClick={addToMealPlan}
          className='btn bg-green-700 hover:bg-green-600 text-white p-3 rounded-md'>
          Add to My Meal Plan
        </button>
      </div>
    </form>
  );
};

export default MealPlanForm;
