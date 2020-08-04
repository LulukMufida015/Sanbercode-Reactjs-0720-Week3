import React from 'react';
import Timer from '../Tugas12/Timer';

class Nama extends React.Component {
    render() {
        return <span>{this.props.nama}</span>;
    }
}
class Harga extends React.Component {
    render() {
        return <span>{this.props.harga}</span>;
    }
}
class Berat extends React.Component {
    render() {
        return <span>{this.props.berat}</span>;
    }
}

let dataHargaBuah = [
    { nama: "Semangka", harga: 10000, berat: "1 kg" },
    { nama: "Anggur", harga: 40000, berat: "0.5 kg" },
    { nama: "Strawberry", harga: 30000, berat: "0.4 kg" },
    { nama: "Jeruk", harga: 30000, berat: "1 kg" },
    { nama: "Mangga", harga: 30000, berat: "0.5 kg" }
]

class InfoTabel extends React.Component {
    render() {
        return (
            <>
                <div className="container">
                    <h1 className="judulbuah">Tabel Harga Buah</h1>
                    <table className="tabelbuah" cellPadding="5px">
                        <tr>
                            <th>Nama</th>
                            <th>Harga</th>
                            <th>Berat</th>
                        </tr>
                        {dataHargaBuah.map(el => {
                            return (
                                <tr>
                                    <td><Nama nama={el.nama} /></td>
                                    <td><Harga harga={el.harga} /></td>
                                    <td><Berat berat={el.berat} /></td>
                                </tr>
                            )
                        })}
                    </table>
                    <Timer />
                </div>
            </>
        )
    }
}

export default InfoTabel
