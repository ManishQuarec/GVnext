import React from 'react'
import { FullNews } from '@/components/FullNews/FullNews'
import App from '@/components/Layout/App';

function fullnews({articles}) {
    console.log("articles", articles);
  return (
    <>
    <App>
    <FullNews value={{data:articles}}/>
    </App>
    </>
  )
}

export default fullnews


export async function getServerSideProps(context) {

  

    const { params } = context
    console.log(params);
    const { fullnews } = params
    // console.log(params);

    // const response = await fetch('http://localhost:5000/call/allNewsData',{data: "Entertainment"} )
    // console.log(response.data);

    // const data = await response.json

    return {
        props: {
            articles: fullnews
        }
    }

}