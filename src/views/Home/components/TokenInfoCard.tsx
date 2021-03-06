import React from 'react'
import styled from 'styled-components'
import { Card, CardBody, Heading, Text, Button, MetamaskIcon, Flex } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import Flat from 'views/Friends/components/Flat'

const StyledTokenInfoCard = styled(Card)`
  align-items: center;
  flex: 1;

`

declare const window: any;

const onAddMetamask = (callback:any) => {

        const provider = window.web3.currentProvider
              provider.sendAsync({
                method: 'metamask_watchAsset',
                params: {
                  "type":"ERC20",
                  "options":{
                    "address": "0x10a49f1fC8C604eA7f1c49bcc6ab2A8E58e77EA5",
                    "symbol": "BUFF",
                    "decimals": 18,
                    "image": "https://www.buffaloswap.org/images/logo_600.png",
                  },
                },
                id: Math.round(Math.random() * 100000),
              }, (err:any, added:any) => {
                console.log('provider returned', err, added)
                
              })

}

const onAddMetamaskRed = (callback:any) => {

  const provider = window.web3.currentProvider
        provider.sendAsync({
          method: 'metamask_watchAsset',
          params: {
            "type":"ERC20",
            "options":{
              "address": "0x9eC132c19f2c35272DE3f81a75D674752D952DA8",
              "symbol": "REDBUFF",
              "decimals": 18,
              "image": "https://www.buffaloswap.org/images/redbuff/red_circle_512.png",
            },
          },
          id: Math.round(Math.random() * 100000),
        }, (err:any, added:any) => {
          console.log('provider returned', err, added)
          
        })

}

const TokenInfoCard = () => {

  return (
    <StyledTokenInfoCard>
      <CardBody>
        <Heading size="xl" mb="24px">
          Token Address
        </Heading>
        <>
          {/* <Heading size="xl">{`$${tvl}`}</Heading> */}
          {/* <Heading size="xl"> */}
        
          {/* </Heading> */}

          <Text color="white">BUFF <img src="https://www.buffaloswap.org/images/logo_buffaloswap_32.png" alt="" width="22px" style={{position: 'relative', top: '5px'}}/> </Text>
          <Text color="primary" fontSize="14px">
            <a href="https://bscscan.com/address/0x10a49f1fC8C604eA7f1c49bcc6ab2A8E58e77EA5" target="_blank" rel="noreferrer">
            0x10a49f1fC8C604eA7f1c49bcc6ab2A8E58e77EA5
            </a>
          </Text>
          <Text color="primary">&nbsp;</Text>
          
          <Text color="white">REDBUFF <img src="https://www.buffaloswap.org/images/redbuff/red_circle_48.png" alt="" width="18px" style={{position: 'relative', top: '3px'}}/> </Text>
          <Text color="primary" fontSize="14px">
            <a href="https://bscscan.com/address/0x9eC132c19f2c35272DE3f81a75D674752D952DA8" target="_blank" rel="noreferrer">
            0x9eC132c19f2c35272DE3f81a75D674752D952DA8
            </a>
          </Text>
          <Text color="primary">&nbsp;</Text>
         
          <Flex justifyContent="space-between">
          <Button variant="secondary" onClick={onAddMetamask}> $BUFF to&nbsp;
            <MetamaskIcon />
          </Button>
          <Button variant="secondary" onClick={onAddMetamaskRed}> $REDBUFF to&nbsp;
            <MetamaskIcon />
          </Button>
          </Flex>
        </>
      </CardBody>
    </StyledTokenInfoCard>
  )
}

export default TokenInfoCard
