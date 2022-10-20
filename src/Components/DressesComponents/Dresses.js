import dataDresses from "../data/dataDresses";
import Dress from "./Dress";
import { useSelector } from "react-redux";
import { getSelectedCategory } from "../../redux/dressesSlice";

const Dresses = () => {

    const selectedCategory = useSelector(getSelectedCategory);

    return(<div className="block">
        {dataDresses
        .filter(dress => {
            if (selectedCategory === 'ALL') return true;
            return selectedCategory === dress.category;
        })
        .map(dress => <Dress dress={dress}/>)}
    </div>)
}

export default Dresses;