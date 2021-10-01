import React from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';

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

import { Wallet } from '../../components/Wallets/Wallets'



const Claims = () => {
    const { connection } = useConnection();
    const { publicKey, sendTransaction } = useWallet();

    console.log('connection', connection)
    console.log('publicKey', publicKey)
    console.log('publicKey', publicKey)
    const { innerWidth: width, innerHeight: height } = window;

    const MODAL_WIDTH = height * .8;



    return(
        <div
            style={{
                height: '100vh',
                width:'100%',
                // backgroundColor:'red',
                display:'flex',
                justifyContent:'center',
                alignItems:'center'
            }}
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
                            padding:10
                            // width:200
                        }}
                    >
                        Connect Wallet
                    </Button>

                </div>

            </div>
        </div>
    )
}

export default Claims;