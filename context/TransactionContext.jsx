"use client";
import React, {useEffect, useState} from 'react';
import {ethers} from 'ethers';
import {contractABI, contractAddress} from '../utils/constants';

export const TransactionContext = React.createContext();
   // Check if we're running in a browser environment before accessing window.ethereum
    const ethereum = typeof window !== 'undefined' ? window.ethereum || null : null;

    
    //const {ethereum} = window;

    const getEthereumContract = () => {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const transactionContract = new ethers.Contract(contractAddress, contractABI,signer);


        return transactionContract;
    }


    export const TransactionProvider = ({children}) =>{
        const [currentAccount,setCurrentAccount] = useState('');
        const[formData, setFormData] = useState({addressTo:'',amount:'',keyword:'',message:''});
        const[isLoading, setIsLoading] = useState(false);
        const[transactionCount,setTransactionCount] =useState(0);
       // localStorage.getItem('transactionCount')
        const handleChange= (e, name) =>{
            setFormData((prevState)=>({...prevState,[name]:e.target.value}));
        }

        const checkWalletIsConnected = async () => {
            try{
                if(!ethereum) return alert("Please install metamask");

                const accounts = await ethereum.request({method: 'eth_accounts'});
    
                if(accounts.length){
                    setCurrentAccount(accounts[0]);
                } else{
                    console.log("No accounts found");
                }
    
                console.log(accounts);

            }catch(error){


            }

        }

        const connectWallet = async () =>{

            try{
                if(!ethereum) return alert("Please install metamask");

                const accounts = await ethereum.request({method: 'eth_requestAccounts'});

                setCurrentAccount(accounts[0]);

            }catch(error){
                console.log(error);
                throw new Error("No Ethereum Object")
            }
        }

        const sendTransaction = async() =>{
       
            try{
                if(!ethereum) return alert("Please install metamask");
                const {addressTo,amount,keyword,message} = formData;
                const transactionContract = getEthereumContract();
                const parsedAmount = ethers.utils.parseEther(amount);
                
                await ethereum.request({
                    method:  'eth_sendTransaction',
                    params:[{
                        from: currentAccount,
                        to:addressTo,
                        gas: '0x5208',
                        value: parsedAmount._hex,
                    }]
                })

                const transactionHash = await transactionContract.addToBlockChain(addressTo,parsedAmount,message,keyword);

                setIsLoading(true);
                console.log('Loading - ${transactionHash.hash}');
                await transactionHash.wait()

                setIsLoading(false);
                console.log('Success - ${transactionHash.hash}');

                const transactionCount = await transactionContract.getTransactionCount();

                setTransactionCount(transactionCount.toNumber());
            }catch(error){
                console.log(error);
                throw new Error("No Ethereum Object")
            }

        }
        useEffect(()=>{

        checkWalletIsConnected();
        },[])

        return(
            <TransactionContext.Provider value={{connectWallet, currentAccount, formData,setFormData,handleChange, sendTransaction}}>
                {children}
            </TransactionContext.Provider>
        
        );

}