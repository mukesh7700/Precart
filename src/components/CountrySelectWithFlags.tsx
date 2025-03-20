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
    { label: "Canada", value: "CA", flag: "🇨🇦" },
    { label: "United Kingdom", value: "UK", flag: "🇬🇧" },
    { label: "Australia", value: "AU", flag: "🇦🇺" },
    { label: "Germany", value: "DE", flag: "🇩🇪" },
    { label: "France", value: "FR", flag: "🇫🇷" },
    { label: "India", value: "IN", flag: "🇮🇳" },
    { label: "Japan", value: "JP", flag: "🇯🇵" },
    { label: "China", value: "CN", flag: "🇨🇳" },
    { label: "Brazil", value: "BR", flag: "🇧🇷" },
  ];

  const [selected] = useState<string | undefined>("");

  // Find the selected country object based on selected value
  const selectedCountry = countries.find(
    (country) => country.value === selected
  );

  return (
    <div className="min-h-[80px]">
      <Select
        className="max-w-sm"
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
