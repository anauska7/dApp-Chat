import { useEffect, useState } from 'react'
import {Heading, Container, Text, Stack,Button, Input, InputGroup, InputLeftAddon, HStack, Avatar}
import{ Auth } from '@polybase/auth'
import { ethPersonalSignRecover } from '@polybase/eth'
import{ Polybase } from "@polybase/client";
import{ useCollection } from "@polybase/react"

const auth = new Auth()


export function Home(){
    const[isLoggedIn, setIsLoggedIn] = useState(false)
    const [publicKey, setPublicKey] = useState<string | null>(null)
    const [nftId, setNftId] = useState('')

    async function getPublicKey({
        const msg = ('Login with Chat')
        const sig = await auth.ethPersonalSignPublicKey(sig, msg)

        return '0x' + publicKey?.slice(4)
    })

    const query = db.collection('NFT')
    const {data, error, loading} = useCollection(query)
    const nft: any= data?.data


    const nfts: any = []

    const signIn = async () => {
        const res = auth.signIn()

        let publicKey = res.publicKey
        if(!publicKey){}
           publicKey = await getPublicKey()
        setIsLoggedIn(!!res)
    }

    try{
        await db.collection('User').record(publicKey).get()
    } catch(e)
    {
        await db.collection('User').create([])
    }

    db.signer(async(data:string) =>{
        return{
            h: 'eth-personal-sign',
            sig: await auth.ethPersonalSign(data),
        }
    })



    useEffect(() => {
        auth.onAuthUpdate((authState) =>{
            setIsLoggedIn(!!authState)

            db.signer(async(data: string) => {
                return{
                    h: 'eth-personal-sign',
                    sig: await auth.ethPersonalSign(data),
                }
            })
        })
    })


    const createNFT = async() => {
        await db.collection('NFT').create([nftId, db.collection('User').record(publicKey)])
    }

    return{
        <Container p={10}>
        <Stack spacing={8} maxW='30em'>
        <Stack>
        <Heading as='h1>Chats</Heading>
        <Text>Welcome to the amazing app that chats.</Text>
        </Stack>
        </Stack>
    }
}
