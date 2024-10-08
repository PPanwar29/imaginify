// import Header from '@/components/shared/Header'
// import TransformationForm from '@/components/shared/TransformationForm';
// import { transformationTypes } from '@/constants';
// import { getUserById } from '@/lib/actions/user.actions';
// import { auth } from '@clerk/nextjs/server';
// import { redirect } from 'next/navigation';
// import React from 'react'

// const AddTransformationPageType = async ({ params: {type} }:
// SearchParamProps) => {
//   const {userId} = auth();
//   const transformation= transformationTypes[type];

//   if(!userId) redirect('/sign-in')
//   const user= await getUserById(userId)

//   return (
//     <>
//       <Header 
//         title={transformation.title}
//         subtitle={transformation.subTitle}
//       />

//       <TransformationForm 
//         action='Add'
//         userId={user._id}
//         type= {transformation.type as TransformationTypeKey}
//         creditBalance={user.creditBalance}
//       />
//     </>
    
//   )
// }

// export default AddTransformationPageType

import Header from '@/components/shared/Header'
import React from 'react'
import TransformationForm from '@/components/shared/TransformationForm';
// import { auth } from '@clerk/nextjs/server';
// import { getUserById } from '@/lib/actions/user.actions';
// import { redirect } from 'next/dist/server/api-utils';
import { transformationTypes } from '@/constants';
import { auth } from '@clerk/nextjs/server';
import { getUserById } from '@/lib/actions/user.actions';
import { redirect } from 'next/navigation';

const AddTransformationPageType= async ({ params: {type} }:
SearchParamProps) => {

  const{userId} = auth();
  const transformation= transformationTypes[type];

  if (!userId) redirect('/sign-in')
  const user= await getUserById(userId);
  return (
    <>
      <Header 
        title={transformation.title}
        subtitle={transformation.subTitle}
      />

      <section className='mt-10'>

        <TransformationForm 
          action='Add'
          userId={user._id}
          type= {transformation.type as TransformationTypeKey}
          creditBalance={user.creditBalance}
        />
      </section>
      
    </>
    
  )
}

export default AddTransformationPageType


// import Header from '@/components/shared/Header'
// import React from 'react'
// import TransformationForm from '@/components/shared/TransformationForm';
// // import { auth } from '@clerk/nextjs/server';
// // import { getUserById } from '@/lib/actions/user.actions';
// // import { redirect } from 'next/dist/server/api-utils';
// import { transformationTypes } from '@/constants';
// import { auth } from '@clerk/nextjs/server';
// import { getUserById } from '@/lib/actions/user.actions';

// const AddTransformationPageType= async ({ params: {type} }:
// SearchParamProps) => {

//   const{userId} = auth();
//   const transformation= transformationTypes[type];

//   // const user= await getUserById(userId);
//   return (
//     <>
//       <Header 
//         title={transformation.title}
//         subtitle={transformation.subTitle}
//       />
//       <TransformationForm 
//         // action='Add'
//         // userId={user._id}
//         // type= {transformation.type as TransformationTypeKey}
//         // creditBalance={user.creditBalance}
//       />
//     </>
    
//   )
// }

// export default AddTransformationPageType