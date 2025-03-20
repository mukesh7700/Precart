import { useState } from "react";
import { Select, SelectItem } from "@jamsr-ui/react";

type CountryOption = {
  label: string;
  value: string;
  flag: string;
};

export const CountrySelect = () => {
  const countries: CountryOption[] = [
    { label: "United States", value: "US", flag: "🇺🇸" },
    { label: "Canada", value: "Canada", flag: "🇨🇦" },
    { label: "United Kingdom", value: "UK", flag: "🇬🇧" },
    { label: "Australia", value: "Australia", flag: "🇦🇺" },
    { label: "Germany", value: "Germany", flag: "🇩🇪" },
    { label: "France", value: "France", flag: "🇫🇷" },
    { label: "India", value: "India", flag: "🇮🇳" },
    { label: "Japan", value: "Japan", flag: "🇯🇵" },
    { label: "China", value: "China", flag: "🇨🇳" },
    { label: "Brazil", value: "Brazil", flag: "🇧🇷" },
  ];

  const [selected] = useState<string | undefined>("");

  // Find the selected country object based on selected value
  const selectedCountry = countries.find(
    (country) => country.value === selected
  );

  return (
    <div className="w-full">
      <Select
        className=""
        size="lg"
        label="Select Country"
        placeholder="Choose a country"
        startContent={
          selectedCountry ? (
            <span className="text-xl">{selectedCountry.flag}</span>
          ) : null
        }
      >
        {countries.map((country) => (
          <SelectItem key={country.value} value={country.value}>
            <div className="flex items-center gap-2">
              <span className="text-xl">{country.flag}</span>
              <span>{country.label}</span>
            </div>
          </SelectItem>
        ))}
      </Select>
    </div>
  );
};
