import React from "react";
import { getOrderStatus } from "../../../lib/helpers";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const watches = [
  {
    id: 1,
    brand_id: 1,
    model_name: "Submariner",
    movement: "Automatic",
    gender: "UNISEX",
    power_reserve: 50,
    case_material: "Stainless Steel",
    case_diameter: 40,
    crystal: "Sapphire",
    dial: "Black",
    bracelet_material: "Stainless Steel",
    bracelet_color: "Silver",
    description: "The iconic dive watch from Rolex.",
  },
  {
    id: 2,
    brand_id: 2,
    model_name: "Speedmaster Professional",
    movement: "Automatic",
    gender: "UNISEX",
    power_reserve: 48,
    case_material: "Stainless Steel",
    case_diameter: 42,
    crystal: "Hesalite",
    dial: "Black",
    bracelet_material: "Stainless Steel",
    bracelet_color: "Silver",
    description: "The first watch worn on the moon.",
  },
  {
    id: 3,
    brand_id: 3,
    model_name: "Prospex Diver",
    movement: "Automatic",
    gender: "MALE",
    power_reserve: 60,
    case_material: "Stainless Steel",
    case_diameter: 44,
    crystal: "Hardlex",
    dial: "Blue",
    bracelet_material: "Rubber",
    bracelet_color: "Black",
    description: "A reliable and rugged diver watch from Seiko.",
  },
  {
    id: 4,
    brand_id: 4,
    model_name: "Tank Solo",
    movement: "Quartz",
    gender: "FEMALE",
    power_reserve: 24,
    case_material: "Stainless Steel",
    case_diameter: 27,
    crystal: "Sapphire",
    dial: "Silver",
    bracelet_material: "Leather",
    bracelet_color: "Black",
    description: "A classic and elegant watch from Cartier.",
  },
  {
    id: 5,
    brand_id: 5,
    model_name: "Big Bang",
    movement: "Automatic",
    gender: "UNISEX",
    power_reserve: 72,
    case_material: "Titanium",
    case_diameter: 45,
    crystal: "Sapphire",
    dial: "Black",
    bracelet_material: "Rubber",
    bracelet_color: "Black",
    description: "A bold and luxurious watch from Hublot.",
  },
  {
    id: 6,
    brand_id: 6,
    model_name: "G-Shock GA-2100",
    movement: "Quartz",
    gender: "UNISEX",
    power_reserve: 120,
    case_material: "Resin",
    case_diameter: 48,
    crystal: "Mineral",
    dial: "Black",
    bracelet_material: "Resin",
    bracelet_color: "Black",
    description: "A durable and versatile watch from Casio.",
  },
  {
    id: 7,
    brand_id: 1,
    model_name: "GMT-Master II",
    movement: "Automatic",
    gender: "UNISEX",
    power_reserve: 48,
    case_material: "Stainless Steel",
    case_diameter: 40,
    crystal: "Sapphire",
    dial: "Black",
    bracelet_material: "Stainless Steel",
    bracelet_color: "Silver",
    description: "A versatile watch with dual timezone functionality.",
  },
  {
    id: 8,
    brand_id: 2,
    model_name: "Seamaster Planet Ocean",
    movement: "Automatic",
    gender: "MALE",
    power_reserve: 60,
    case_material: "Stainless Steel",
    case_diameter: 43,
    crystal: "Sapphire",
    dial: "Blue",
    bracelet_material: "Stainless Steel",
    bracelet_color: "Silver",
    description: "A professional dive watch with exceptional performance.",
  },
  {
    id: 9,
    brand_id: 3,
    model_name: "Presage Cocktail Time",
    movement: "Automatic",
    gender: "MALE",
    power_reserve: 41,
    case_material: "Stainless Steel",
    case_diameter: 40,
    crystal: "Hardlex",
    dial: "White",
    bracelet_material: "Leather",
    bracelet_color: "Brown",
    description: "A stylish and dressy watch inspired by cocktails.",
  },
  {
    id: 10,
    brand_id: 4,
    model_name: "Ballon Bleu de Cartier",
    movement: "Automatic",
    gender: "FEMALE",
    power_reserve: 48,
    case_material: "Stainless Steel",
    case_diameter: 36,
    crystal: "Sapphire",
    dial: "Silver",
    bracelet_material: "Stainless Steel",
    bracelet_color: "Silver",
    description: "A distinctive and elegant watch with a unique case shape.",
  },
  {
    id: 11,
    brand_id: 5,
    model_name: "Classic Fusion",
    movement: "Automatic",
    gender: "UNISEX",
    power_reserve: 42,
    case_material: "Titanium",
    case_diameter: 38,
    crystal: "Sapphire",
    dial: "Black",
    bracelet_material: "Rubber",
    bracelet_color: "Black",
    description:
      "An elegant and contemporary watch with a fusion of materials.",
  },
  {
    id: 12,
    brand_id: 6,
    model_name: "Edifice EQB-1000",
    movement: "Quartz",
    gender: "MALE",
    power_reserve: 24,
    case_material: "Stainless Steel",
    case_diameter: 44,
    crystal: "Mineral",
    dial: "Black",
    bracelet_material: "Stainless Steel",
    bracelet_color: "Silver",
    description: "A sleek and connected watch with smartphone integration.",
  },
  {
    id: 13,
    brand_id: 1,
    model_name: "Yacht-Master",
    movement: "Automatic",
    gender: "UNISEX",
    power_reserve: 72,
    case_material: "Stainless Steel",
    case_diameter: 37,
    crystal: "Sapphire",
    dial: "White",
    bracelet_material: "Stainless Steel",
    bracelet_color: "Silver",
    description:
      "A luxurious and sporty watch designed for sailing enthusiasts.",
  },
  {
    id: 14,
    brand_id: 2,
    model_name: "Constellation",
    movement: "Quartz",
    gender: "FEMALE",
    power_reserve: 24,
    case_material: "Stainless Steel",
    case_diameter: 28,
    crystal: "Sapphire",
    dial: "White",
    bracelet_material: "Stainless Steel",
    bracelet_color: "Silver",
    description: 'A sophisticated and elegant watch with the iconic "claws".',
  },
  {
    id: 15,
    brand_id: 3,
    model_name: "Presage Enamel Dial",
    movement: "Automatic",
    gender: "MALE",
    power_reserve: 45,
    case_material: "Stainless Steel",
    case_diameter: 39,
    crystal: "Sapphire",
    dial: "Blue",
    bracelet_material: "Leather",
    bracelet_color: "Black",
    description:
      "A refined and traditional watch with a beautiful enamel dial.",
  },
  {
    id: 16,
    brand_id: 4,
    model_name: "Panthère de Cartier",
    movement: "Quartz",
    gender: "FEMALE",
    power_reserve: 24,
    case_material: "Stainless Steel",
    case_diameter: 22,
    crystal: "Sapphire",
    dial: "Silver",
    bracelet_material: "Stainless Steel",
    bracelet_color: "Silver",
    description: "An iconic and timeless watch with a distinctive design.",
  },
  {
    id: 17,
    brand_id: 5,
    model_name: "Spirit of Big Bang",
    movement: "Automatic",
    gender: "UNISEX",
    power_reserve: 72,
    case_material: "Carbon",
    case_diameter: 45,
    crystal: "Sapphire",
    dial: "Skeleton",
    bracelet_material: "Rubber",
    bracelet_color: "Black",
    description:
      "A bold and innovative watch with a unique barrel-shaped case.",
  },
  {
    id: 18,
    brand_id: 6,
    model_name: "Oceanus OCW-S5000",
    movement: "Solar Quartz",
    gender: "MALE",
    power_reserve: 0,
    case_material: "Titanium",
    case_diameter: 43,
    crystal: "Sapphire",
    dial: "Black",
    bracelet_material: "Titanium",
    bracelet_color: "Silver",
    description: "A sophisticated and high-tech watch powered by solar energy.",
  },
  {
    id: 19,
    brand_id: 1,
    model_name: "Daytona",
    movement: "Automatic",
    gender: "UNISEX",
    power_reserve: 72,
    case_material: "Stainless Steel",
    case_diameter: 40,
    crystal: "Sapphire",
    dial: "Black",
    bracelet_material: "Stainless Steel",
    bracelet_color: "Silver",
    description:
      "An iconic chronograph watch from Rolex, known for its racing heritage.",
  },
  {
    id: 20,
    brand_id: 2,
    model_name: "Aqua Terra",
    movement: "Automatic",
    gender: "UNISEX",
    power_reserve: 55,
    case_material: "Stainless Steel",
    case_diameter: 41,
    crystal: "Sapphire",
    dial: "Blue",
    bracelet_material: "Stainless Steel",
    bracelet_color: "Silver",
    description: "A versatile and elegant watch suitable for any occasion.",
  },
  {
    id: 21,
    brand_id: 3,
    model_name: "Prospex Street Series",
    movement: "Automatic",
    gender: "MALE",
    power_reserve: 60,
    case_material: "Stainless Steel",
    case_diameter: 42,
    crystal: "Hardlex",
    dial: "Black",
    bracelet_material: "Silicone",
    bracelet_color: "Black",
    description: "A tough and stylish watch designed for urban adventures.",
  },
  {
    id: 22,
    brand_id: 4,
    model_name: "Santos de Cartier",
    movement: "Automatic",
    gender: "UNISEX",
    power_reserve: 48,
    case_material: "Stainless Steel",
    case_diameter: 35,
    crystal: "Sapphire",
    dial: "Silver",
    bracelet_material: "Stainless Steel",
    bracelet_color: "Silver",
    description: "A classic and timeless watch with a distinctive square case.",
  },
  {
    id: 23,
    brand_id: 5,
    model_name: "MP Collection",
    movement: "Automatic",
    gender: "MALE",
    power_reserve: 72,
    case_material: "Titanium",
    case_diameter: 47,
    crystal: "Sapphire",
    dial: "Black",
    bracelet_material: "Rubber",
    bracelet_color: "Black",
    description:
      "A high-performance watch designed for extreme sports and adventures.",
  },
  {
    id: 24,
    brand_id: 6,
    model_name: "Master of G Mudmaster",
    movement: "Quartz",
    gender: "UNISEX",
    power_reserve: 24,
    case_material: "Resin",
    case_diameter: 56,
    crystal: "Mineral",
    dial: "Black",
    bracelet_material: "Resin",
    bracelet_color: "Black",
    description:
      "A rugged and durable watch built to withstand harsh environments.",
  },
];

const brandWatches = [
  { id: 1, name: "Rolex" },
  { id: 2, name: "Omega" },
  { id: 3, name: "Seiko" },
  { id: 4, name: "Cartier" },
  { id: 5, name: "Hublot" },
  { id: 6, name: "Casio" },
];

function ProductForm() {
  const navigate = useNavigate();
  return (
    <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
      <div className="flex justify-between items-center">
        <strong className="text-gray-700 font-medium">Products</strong>
        <Link
          to="/admin/products/create"
          className="btn btn-sm hover:bg-gray-400"
        >
          create product
        </Link>
      </div>
      <div className="border-x border-gray-200 rounded-sm mt-3">
        <div className="overflow-x-auto">
          <table className="table w-full ">
            {/* head */}
            <thead>
              <tr className="bg-gray-700 text-white">
                <th>id</th>
                <th>brand_id : brandName</th>
                <th>modelName</th>
                <th>movement</th>
                <th>ButtonEdit</th>
                <th>ButtonDelete</th>
              </tr>
            </thead>
            <tbody>
              {watches.map((el) => (
                <tr key={el.id} onClick={() => navigate(`${el.id}`)}>
                  <th>{el.id}</th>
                  <td className="text-center">{el.brand_id}</td>
                  <td>{el.model_name}</td>
                  <td>{el.movement}</td>
                  <td>
                    <button
                      className="btn btn-sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`edit`);
                      }}
                    >
                      EDIT
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-sm bg-gray-400 text-black"
                      onClick={(e) => e.stopPropagation()}
                    >
                      DELETE
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ProductForm;

// {
//   id: 1,
//   brand_id: 1,
//   model_name: "Submariner",
//   movement: "Automatic",
//   gender: "UNISEX",
//   power_reserve: 50,
//   case_material: "Stainless Steel",
//   case_diameter: 40,
//   crystal: "Sapphire",
//   dial: "Black",
//   bracelet_material: "Stainless Steel",
//   bracelet_color: "Silver",
//   description: "The iconic dive watch from Rolex.",
// },
