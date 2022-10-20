import Filter from "./Filter";

const Allcategories = () => {
    return(<div>
        <h1>PRODUCTS</h1>

        {['DRESSES-LONG', 'SHOES', 'DRESSES-SHORT', 'WEDDING-DRESS-LONG', 'CLATCH', 'WEDDING-DRESS-SHORT','ALL'].map(category =>  <Filter category={category}/>
        )}
        
    </div>)
}

export default Allcategories;