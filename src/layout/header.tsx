import Helmet from "react-helmet";

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
            <div id="area-opp" className="bg-blue-800 h-[96px] flex gap-3 items-center justify-center text-3xl font-light text-white">
                <small>Seçili ürünlerde </small>
                <b className="font-bold">%40'a varan indirim</b>
                <small> oranlarını kaçırma! </small>
                <button className="bg-red-600 hover:bg-red-700 text-white text-lg font-bold px-5 py-2 rounded-md">HEMEN İNCELE</button>
            </div>
            <header className="h-[128px] border-b border-slate-300 items-center grid grid-cols-[1fr_3fr_1fr]">
                <div>
                    a
                </div>
                <div>

                </div>
                <div>

                </div>
            </header>
        </>
    );

}