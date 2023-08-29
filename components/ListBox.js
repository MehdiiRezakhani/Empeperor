import Link from 'next/link';
import React from 'react';

const ListBox = () => {
    const ListArr = [
        {title:"RoadMap", Link:"roadmap"},
        {title:"Token Econicts", Link:"tokeneconomics"},
        {title:"Doc", Link:""},
        {title:"About", Link:"about"},
        {title:"Buy Empeper", Link:""},
    ]
    return (
        <div className='hidden lg:flex items-center'>
            {ListArr.map((item, index) =>
                    <div key={index}>
                        <Link 
                            href={item.Link ? `/${item.Link}` : `/comingsoon`}
                            className='text-sm xl:text-xl text-primary hover:text-white font-semibold mx-3'
                        >{item.title}</Link>
                    </div>
            )}
        </div>
    );
};

export default ListBox;