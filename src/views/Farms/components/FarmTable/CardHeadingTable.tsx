import React from 'react'
import styled from 'styled-components'
import { Tag, Flex, Heading, Image } from '@pancakeswap-libs/uikit'
import { CommunityTag, CoreTag, NoFeeTag, RiskTag } from 'components/Tags'

export interface ExpandableSectionProps {
  lpLabel?: string
  multiplier?: string
  risk?: number
  depositFee?: number
  farmImage?: string
  tokenSymbol?: string
}

const Wrapper = styled(Flex)`
  svg {
    margin-right: 0.25rem;
  }
  
`

const MultiplierTag = styled(Tag)`
  margin-left: 4px;
`

const CardHeadingTable: React.FC<ExpandableSectionProps> = ({
  lpLabel,
  multiplier,
  risk,
  farmImage,
  tokenSymbol,
  depositFee,
}) => {
  return (
    <Wrapper justifyContent="space-between" alignItems="center" mb="0px">
      <Flex>
        <div style={{width: '64px', height: '52px'}}><Image src={`/images/farms/${farmImage}.png`} alt={tokenSymbol} width={64} height={64} /></div>
      </Flex>
      <Flex flexDirection="row" alignItems="flex-end" style={{minWidth: '150px', maxWidth: '150px'}} >
        <Heading mb="4px" style={{marginLeft: '6px'}}>{lpLabel}</Heading>
        
      </Flex>
      <Flex justifyContent="right">
          <div style={{marginRight: '4px'}}>
            <MultiplierTag variant="failure" >{multiplier}</MultiplierTag>
          </div>

          {depositFee === 0 ? <NoFeeTag /> : null}
          {/* {isCommunityFarm ? <CommunityTag /> : <CoreTag />} */}
          {/* <RiskTag risk={risk} /> */}
          
        </Flex>
    </Wrapper>
  )
}

export default CardHeadingTable
