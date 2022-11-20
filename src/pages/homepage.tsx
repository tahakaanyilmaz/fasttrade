import { connect } from "react-redux";
import Header from "../layout/header";

function Homepage()
{

    return (
        <>
            <Header title="FastTrade - Online Alışveriş Merkezi"/>
            <div id="body" className="container">
                <div id="sliders" className="gap-4 grid grid-rows-2 grid-cols-[1fr_2fr_1fr] h-[400px]">
                    <div className="bg-[url(demo/bg-0.jpg)] object-cover bg-center rounded-md"></div>
                    <div className="bg-[url(demo/bg-1.jpg)] object-cover bg-center row-span-2 rounded-md"></div>
                    <div className="bg-[url(demo/bg-2.jpg)] object-cover bg-center rounded-md"></div>
                    <div className="bg-[url(demo/bg-3.jpg)] object-cover bg-center rounded-md"></div>
                    <div className="bg-[url(demo/bg-4.jpg)] object-cover bg-center rounded-md"></div>
                </div>
            </div>
        </>
    );

}

function mapStateToProps(state: any) 
{
    return {}
}

function mapDispatchToProps(dispatch: any) 
{
    return {}
}

export default connect(mapStateToProps,mapDispatchToProps)(Homepage);