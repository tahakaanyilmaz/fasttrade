import Helmet from "react-helmet";
import { Link } from "react-router-dom";
import { AiFillMobile, AiOutlineCloseCircle, AiOutlineHeart, AiOutlineSearch, AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import { FaLaptopCode } from "react-icons/fa";
import { GiAmpleDress, GiElectric } from "react-icons/gi";
import { TbToolsKitchen2 } from "react-icons/tb";

import Logo from "../logo.png";
import NotificationBox from "../components/notificationBox";
import MenuItem from "../components/menuItem";

interface IProps
{
    title?: string,
}

export default (props: IProps) =>
{

    return (
        <>
            <Helmet>
                <title>{props.title ?? 'Bilinmeyen Sayfa - FastTrade'}</title>
            </Helmet>
            <div id="area-opp" className="bg-blue-800 h-[96px] text-3xl font-light text-white">
                <div className="w-full h-full px-12 wd:px-0 gap-3 max-w-[1366px] mx-auto items-center flex">
                    <small>Seçili ürünlerde </small>
                    <b className="font-bold">%40'a varan indirim</b>
                    <small> oranlarını kaçırma! </small>
                    <button className="bg-red-600 hover:bg-red-700 text-white text-lg font-bold px-5 py-2 rounded-md">HEMEN İNCELE</button>
                    <AiOutlineCloseCircle className="cursor-pointer order-2 ml-auto text-[rgba(255,255,255,.75)] text-md"/>
                </div>
            </div>
            <header className="h-[128px] border-b border-slate-300">
                <div className="container items-center grid grid-cols-[2fr_3fr_2fr]">
                    <div className="flex justify-start h-[128px]">
                        <Link to="/" className="hover:animate-pulse">
                            <img src={Logo} className="w-auto h-[127px]" draggable="false"/>
                        </Link>
                    </div>
                    <div>
                        <div className="float-right flex gap-4 relative mt-1 -mb-[64px] mr-[5px]">
                            <select id="data" className="border-0 appearance-none bg-transparent outline-none cursor-pointer">
                                <option value="0">Tüm Kategoriler</option>
                            </select>
                            <button type="submit" className="p-4 text-xl rounded-full bg-red-500 hover:bg-red-600 text-white font-thin">
                                <AiOutlineSearch/>
                            </button>
                        </div>
                        <input type="search" className="py-4 pl-6 pr-[196px] rounded-full w-full outline-none border-2 border-slate-300" placeholder="Arama yap..." id="" />
                    </div>
                    <div className="flex gap-8 text-4xl justify-end">
                        <Link to="/whislist" className="relative">
                            <AiOutlineHeart/>
                            <NotificationBox id="wishlist-notifies" bg="bg-red-600" count={0}/>
                        </Link>
                        <Link to="/cart" className="relative">
                            <AiOutlineShoppingCart/>
                            <NotificationBox id="cart-notifies" bg="bg-amber-600" count={0}/>
                        </Link>
                        <Link to="/user" className="relative">
                            <AiOutlineUser/>
                            <NotificationBox id="wishlist-notifies" bg="bg-sky-600" count={0}/>
                        </Link>
                    </div>
                </div>
            </header>
            <div id="menu" className="mb-8 w-full flex justify-center items-center h-[72px] border-b-2 border-slate-300">
                <MenuItem link="/" icon={<GiAmpleDress/>} title="Moda & Giyim" subject="Trend Kıyafetler"/>
                <MenuItem link="/" icon={<GiElectric/>} title="Elektrik & Elektronik" subject="Son Teknoloji"/>
                <MenuItem link="/" icon={<AiFillMobile/>} title="Telefonlar" subject="Mobil Cihazlar"/>
                <MenuItem link="/" icon={<TbToolsKitchen2/>} title="Mutfak & Beyaz Eşya" subject="Pırıl Pırıl"/>
                <MenuItem link="/" icon={<FaLaptopCode/>} title="Masaüstü & Laptop" subject="Canavarlar"/>
            </div>
        </>
    );

}