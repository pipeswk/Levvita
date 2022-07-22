import React from 'react'
import Image from 'next/image'

const DesktopSection = ( { imgPosition, textIsList, titulo, imagen, texto, list } ) => {
  return (
    <div className='d-none d-md-block'>
        {imgPosition === 'LEFT' && textIsList === false ? (
            <div className='container'>
                <div className='row'>
                    <h2 className='text-center fw-bolder mb-4'>{titulo}</h2>
                    <div className='col-6 text-center'>
                        <Image
                            src={imagen}
                            width={400}
                            height={400}
                            className='border border-5 rounded-3'
                        />
                    </div>
                    <div className='col-6 text-center d-flex align-items-center'>
                        <p className='text-start'>{texto}</p>
                    </div>
                </div>
                <hr />
            </div>
        ) : imgPosition === 'RIGHT' && textIsList === false ? (
            <div className='container'>
                <div className='row'>
                    <h2 className='text-center fw-bolder mb-4'>{titulo}</h2>
                    <div className='col-6 text-center d-flex align-items-center'>
                        <p className='text-start'>{texto}</p>
                    </div>
                    <div className='col-6 text-center'>
                        <Image
                            src={imagen}
                            width={400}
                            height={400}
                            className='border border-5 rounded-3'
                        />
                    </div>
                </div>
                <hr />
            </div>
        ) : imgPosition === 'LEFT' && textIsList === true ? (
            <div className='container'>
                <div className='row'>
                    <h2 className='text-center fw-bolder mb-4'>{titulo}</h2>
                    <div className='col-6 text-center'>
                        <Image
                            src={imagen}
                            width={400}
                            height={400}
                            className='border border-5 rounded-3'
                        />
                    </div>
                    <div className='col-6 text-center d-flex align-items-center'>
                        <ul>
                            {list.map((item, index) => (
                                <li
                                    key={index}
                                    className='text-start'
                                >
                                    {item}
                                </li>   
                            ))}
                        </ul>
                    </div>
                </div>
                <hr />
            </div>
        ) : imgPosition === 'RIGHT' && textIsList === true ? (
            <div className='container'>
                <div className='row'>
                    <h2 className='text-center fw-bolder mb-4'>{titulo}</h2>
                    <div className='col-6 text-center d-flex align-items-center'>
                        <ul>
                            {list.map((item, index) => (
                                <li
                                    key={index}
                                    className='text-start'
                                >
                                    {item}
                                </li>   
                            ))}
                        </ul>
                    </div>
                    <div className='col-6 text-center'>
                        <Image
                            src={imagen}
                            width={400}
                            height={400}
                            className='border border-5 rounded-3'
                        />
                    </div>
                </div>
                <hr />
            </div>
        ): null}
    </div>
  )
}

export default DesktopSection