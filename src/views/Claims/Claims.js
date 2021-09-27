import React, { useEffect } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import BacgroundPattern from '../../assets/bg/backgroundv1.png'
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import {
    getLedgerWallet,
    getPhantomWallet,
    getSlopeWallet,
    getSolflareWallet,
    getSolletExtensionWallet,
    getSolletWallet,
    getTorusWallet,
} from '@solana/wallet-adapter-wallets';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';

import Modal from '@mui/material/Modal';
import { Box, ThemeProvider } from '@mui/system';
import { Button } from '@mui/material';
import "./Claims.css";
// import { Wasallet } from '../../components/Wallets/Wallets'



const Claims = () => {
    const { connection } = useConnection();
    // const { publicKey, sendTransaction } = useWallet();
    const { wallet, connect, connecting, connected, publicKey, sendTransaction } = useWallet();

    console.log('connection', connection)
    console.log('publicKey', publicKey)
    console.log('publicKey', publicKey)
    const { innerWidth: width, innerHeight: height } = window;

    const MODAL_WIDTH = height * .8;
    useEffect(() => {
        // window.solana.connect();
        // window.solana.on("connect", () => console.log("connected!"))
        // connect().catch(() => { });
    },[])

    return(
        <div
            style={{
                height: '100vh',
                width:'100%',
                // backgroundColor:'red',
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                backgroundImage: `url("${BacgroundPattern}")`
            }}
            className="backgroundContainer"
        >
            <div
                style={{
                    height:MODAL_WIDTH,
                    width:MODAL_WIDTH,
                    backgroundColor:'silver',
                    borderRadius:20,
                    display:'flex',
                    flexDirection:'column'

                }}
            >

                <div
                    style={{
                        flex:9
                    }}
                >

                </div>
                <div
                    style={{
                        flex:1,
                        justifyContent:'center',
                        alignItems:'center',
                        display:'flex',
                        padding:20
                    }}
                >
                    <Button 
                        size="large" 
                        variant="contained"
                        style={{
                            height:'100%',
                            padding:10,
                            backgroundColor:'crimson'
                            // width:200
                        }}
                        
                    >
                        <p
                            style={{
                                fontFamily:'Bungee',
                                fontSize:15,
                                fontWeight:'bolder'
                            }}
                        >
                            Connect Wallet
                        </p>
                        
                    </Button>

                </div>

            </div>
            {/* <Wallet/> */}
        </div>
    )
}

export default Claims;