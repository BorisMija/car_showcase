"use client";
import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>; // ✅ Corectat numele
  btnType?: "button" | "submit";
  rightIcon?: string;
  isDisabled?: boolean;
  textStyles?: string; // ✅ Adăugat
}

export interface SearchManufacturerProps {
  manufacturer: string;
  setManufacturer: React.Dispatch<React.SetStateAction<string>>;
}

export interface CarProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}
export interface FilterProps{
    manufacturer: string;
    year: number;
    fuel: string;
    limit: number;
    model: string;
}
export interface OptionProps {
    title: string;
    value: string;
}
    export interface CustomFilterProps {
  title: string;
  options: OptionProps[];
}
export interface ShowMoreProps {
  pageNumber: number;
  isNext: boolean;
}
export interface HomeProps {
  searchParams: {
    manufacturer?: string;
    year?: number;
    fuel?: string;
    limit?: number;
    model?: string;
  };
}