import React from 'react'
import user_icon from "../assets/img/usericon.jpg";
const commentData=[
    {
        name:"harry",
        text:"lorem djsjkjudf cjjvfdh",
        replies:[]
    },
    {
        name:"akshay",
        text:"lorem djsjkjudf cjjvfdh",
        replies:[{
            name:"abcd",
            text:"lorem djsjkjudf cjjvfdh",
            replies:[ {
                name:"egfh",
                text:"lorem djsjkjudf cjjvfdh",
                replies:[
                    {
                        name:"harry1",
                        text:"lorem djsjkjudf cjjvfdh",
                        replies:[]
                    },
                    {
                        name:"harry2",
                        text:"lorem djsjkjudf cjjvfdh",
                        replies:[]
                    },
                    {
                        name:"harry3",
                        text:"lorem djsjkjudf cjjvfdh",
                        replies:[]
                    },
                    {
                        name:"harry4",
                        text:"lorem djsjkjudf cjjvfdh",
                        replies:[]
                    }
                ]
            }]
        }]
    },
    {
        name:"rohit",
        text:"lorem djsjkjudf cjjvfdh",
        replies:[]
    },
    {
        name:"dhoni",
        text:"lorem djsjkjudf cjjvfdh",
        replies:[]
    },
    {
        name:"pandya",
        text:"lorem djsjkjudf cjjvfdh",
        replies:[]
    },
    {
        name:"bumrah",
        text:"lorem djsjkjudf cjjvfdh",
        replies:[]
    }
];

const CommentList=({comments}) => {
    return comments.map((comment,index)=>(
        <div key={index}> <Comment  data={comment}/>
        <div className='pl-5 border border-l-black ml-5'>
           <CommentList  comments={comment.replies}/></div>     
        </div>
    )) 
}
const Comment=({data})=>{
const {name,text,replies} = data;
return (
    <div className='flex shadom-sm bg-gray-100 p-2 rounded-lg my-2'>
        <img  className="w-12 h-12" alt="user" src={user_icon} />
        <div  className='px-3'>
            <p className='font-bold'>{name}</p>
            <p>{text}</p>
        </div>
    </div>
)
}

const CommentContainer = () => {
  return (
    <div className='m-5 p-2'>
        <h1 className='text-2xl font-bold'>Comments: </h1>
       <CommentList comments={commentData}/>
    </div>

  )
}

export default CommentContainer