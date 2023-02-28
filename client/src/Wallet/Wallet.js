import React from "react";
import "./Wallet.css";
import { useState } from "react";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import { ethers } from "ethers";
import Button from "components/CustomButtons/Button.js";
// import ErrorMessage from "./ErrorMessage";
// import TxList from "./TxList";

const startPayment = async ({ setError, setTxs, ether, addr }) => {
    

    try {
        if (!window.ethereum)
            throw new Error("No crypto wallet found. Please install it.");

        console.warn("start1")
        // await window.ethereum.send("eth_requestAccounts");
        let account = await window.ethereum.request({
            method: "eth_requestAccounts",
        });
        console.warn("Acout ----->>>",account)
        console.warn("start2")
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        console.warn("start3")
        const signer = provider.getSigner();
        ethers.utils.getAddress(addr);
        const tx = await signer.sendTransaction({
            to: addr,
            value: ethers.utils.parseEther(ether)
        });
        console.log({ ether, addr });
        console.log("tx", tx);
        setTxs([tx]);
    } catch (err) {
        setError(err.message);
    }
};

export default function App() {
    const [address, setAddress] = useState('0x67C17180DE63d93be308DA40BD32b3Dd6ABd04Da');
    const [ether, setEhter] = useState('10')
    const [error, setError] = useState();
    const [txs, setTxs] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        setError();
        await startPayment({
            setError,
            setTxs,
            ether: data.get("ether"),
            addr: data.get("addr")
        });
    };



    return (
        <Card>
            <form className="m-4" onSubmit={handleSubmit}>
                <CardHeader color="primary" >
                 <h4 className="text-xl font-semibold text-gray-700 text-center">
                        Send ETH payment
                    </h4>
            </CardHeader>
            <CardBody>
                 <div className="">
                        <div className="my-3">
                            <input
                                type="text"
                                name="addr"
                                value={address}
                                className="input input-bordered block w-full focus:ring focus:outline-none"
                                placeholder={address}
                            />
                        </div>
                        <div className="my-3">
                            <input
                                name="ether"
                                type="text"
                                value={ether}
                                className="input input-bordered block w-full focus:ring focus:outline-none"
                                placeholder="Amount in ETH"
                            />
                        </div>
                    </div>
            </CardBody>
            <CardFooter>
              <footer className="p-4">
                        <Button color="primary"
                        type="submit"
                        className="btn btn-primary submit-button focus:ring focus:outline-none w-full"
                    >
                        Pay now
                    </Button>

                </footer>
            </CardFooter>
        </form>
        </Card>
        
        
    );
}
