import CardProduct from "../../product/components/CardProduct";
import SelectionForm from "../../product/components/SelectionForm";
import useSearch from "../../../hooks/useSearch";
import Icon from "../../../components/Icon";
import gallerlySign from "../../../assets/Gallery-removebg-preview.png";

export default function SearchProduct() {
  const {
    showSearch,
    querySearch,
    products,
    brands,
    selectBrand,
    handleSelectBrand,
  } = useSearch();

  return (
    <div className=" mx-auto w-[1200px] min-h-screen flex flex-col gap-4 py-4 px-8 bg-gray-100">
      <div className="flex justify-center">
        <img className="w-72 pt-8" src={gallerlySign} />
      </div>
      {showSearch || querySearch ? <p>Search keyword: '{showSearch}'</p> : ""}
      <div className="flex gap-4 justify-end">
        <SelectionForm items={brands} onClick={handleSelectBrand} />
      </div>
      <div className="flex flex-wrap justify-between gap-8">
        {products.length > 0 ? (
          selectBrand !== null && selectBrand !== "All brand" ? (
            products
              .filter((product) => product.brand.name === selectBrand)
              .map((product) => <CardProduct data={product} key={product.id} />)
          ) : (
            products.map((product) => (
              <CardProduct data={product} key={product.id} />
            ))
          )
        ) : (
          <div className="w-full flex flex-col justify-center items-center">
            <Icon name="FileSearch" size="100" />
            <div>No results found</div>
            <div>Try different or more general keywords</div>
          </div>
        )}
      </div>
    </div>
  );
}
