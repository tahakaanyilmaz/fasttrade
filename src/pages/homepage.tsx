import { connect } from "react-redux";
import Header from "../layout/header";

function Homepage()
{

    return (
        <>
            <Header title="FastTrade - Online Alışveriş Merkezi"/>
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