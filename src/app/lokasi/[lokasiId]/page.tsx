export default function LokasiDetail({
    params
}:{
    params:{lokasiId:string}
}) {

    return (
        <div>
            Lokasi {params.lokasiId}
        </div>
    )
}