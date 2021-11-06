import { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';

type props = {
  items: { name: string }[];
  setSelected: (item: string) => void;
};

export default function CustomListBox({ items, setSelected }: props) {
  const [selectedItem, setSelectedItem] = useState(items[0]);

  return (
    <div className=''>
      <Listbox
        value={selectedItem}
        onChange={(item) => {
          setSelectedItem(item);
          setSelected(item.name);
        }}>
        <div className='relative mt-1'>
          <Listbox.Button className='relative w-full py-2 px-3 pr-10 text-left rounded border border-gray-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm '>
            <span className='block truncate'>{selectedItem.name}</span>
            <span className='absolute inset-y-0 right-0 flex items-center pr-2 '>
              <SelectorIcon
                className='w-5 h-5 text-gray-400'
                aria-hidden='true'
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'>
            <Listbox.Options className='absolute w-full mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-20'>
              {items.map((item, itemIdx) => (
                <Listbox.Option
                  key={itemIdx}
                  className={({ active }) =>
                    `${active ? 'text-white bg-green-400' : 'text-gray-900'}
                          cursor-pointer select-none relative py-2 pl-10 pr-4`
                  }
                  value={item}>
                  {({ selected, active }) => (
                    <>
                      <span
                        className={`${
                          selected ? 'font-bold' : 'font-medium'
                        } block truncate`}>
                        {item.name}
                      </span>
                      {selected ? (
                        <span
                          className={`${
                            active ? 'text-amber-600' : 'text-amber-600'
                          }
                                absolute inset-y-0 left-0 flex items-center pl-3`}>
                          <CheckIcon className='w-5 h-5' aria-hidden='true' />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
