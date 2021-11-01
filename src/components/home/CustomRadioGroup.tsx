import { useState } from "react";
import { RadioGroup } from "@headlessui/react";
import {CheckIcon} from '@heroicons/react/outline';

const plans = [
  {
    name: "Vegetarian",
    description: "No ingredients may contain meat or meat by-products, such as bones or gelatin.",
  },
  {
    name: "Non-Vegetarian",
    description: "Food items containing meat (red meat, poultry, seafood, or the flesh of any other animal), and sometimes, eggs."
  },
];

export default function CustomRadioGroup() {
  const [selected, setSelected] = useState(plans[0]);

  return (
    <div className="mt-4">
        <RadioGroup value={selected} onChange={setSelected}>
          <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
          <div className="space-y-4">
            {plans.map((plan) => (
              <RadioGroup.Option
                key={plan.name}
                value={plan}
                className={({ active, checked }) =>
                  `${
                    active
                      ? "ring-2 ring-offset-2 ring-offset-green-300 ring-white ring-opacity-60"
                      : ""
                  }
                  ${
                    checked ? "bg-green-800 bg-opacity-75 text-white" : "bg-gray-100"
                  }
                    relative rounded-lg shadow-md px-5 py-4 cursor-pointer flex focus:outline-none`
                }
              >
                {({ active, checked }) => (
                  <>
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center">
                        <div className="text-sm">
                          <RadioGroup.Label
                            as="p"
                            className={`font-medium mb-2  ${
                              checked ? "text-white" : "text-gray-900"
                            }`}
                          >
                            {plan.name}
                          </RadioGroup.Label>
                          <RadioGroup.Description
                            as="span"
                            className={`inline font-medium ${
                              checked ? "text-sky-100" : "text-gray-500"
                            }`}
                          >
                            <span>
                              {plan.description}
                            </span>
                          </RadioGroup.Description>
                        </div>
                      </div>
                      {checked && (
                        <div className="flex-shrink-0 text-white">
                          <CheckIcon className="w-6 h-6" />
                        </div>
                      )}
                    </div>
                  </>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
    </div>
  );
}


