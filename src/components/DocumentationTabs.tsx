"use client"

import { FC } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/Tabs'
import Code from './Code'
import { nodejs, python } from '@/helpers/documentation-code'

const DocumentationTabs: FC = () => {
  return <Tabs>
    <TabsList defaultValue='nodejs' className='max-w-2xl w-full'>
        <TabsTrigger value='nodejs'>NodeJS</TabsTrigger>
        <TabsTrigger value='python'>Python</TabsTrigger>
    </TabsList>
    <TabsContent value='nodejs'>
        <Code animated language='javascript' code={nodejs} show/>
    </TabsContent>
    <TabsContent value='python'>
      <Code animated language='python' code={python} show/>
    </TabsContent>
  </Tabs>
}

export default DocumentationTabs