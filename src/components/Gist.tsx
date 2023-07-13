import React from 'react'

import { BsFileEarmarkText } from "react-icons/bs";
import { MdCode, MdOutlineStar } from "react-icons/md";
import { BiGitRepoForked } from "react-icons/bi";
import { GoComment } from "react-icons/go";
import { githubUser } from '../types/githubUserTypes';

export type Props = { gist: githubUser; loading: boolean }
const Gist = ({ gist }: Props) => {
    const files = Object.keys(gist.files);
    return <div className='card-container'>
        <div className='card-row'>
            <div className='card-row'>
                <img className='profile-image' alt='' src={gist?.owner?.avatar_url} />
                <a className='profile-name' href={gist?.owner?.html_url} rel="noreferrer" target="_blank">
                    {gist?.owner?.login}
                </a>
            </div>
            <div className='card-row'>
                <a href="#" className='link'target="_blank" rel="noreferrer">
                    <MdCode size={14} />
                    <span className='link-name'>{files.length}</span>
                    <span className='link-name'>File</span>
                </a>
                <a href={gist?.forks_url} className='link' target="_blank" rel="noreferrer">
                    <BiGitRepoForked size={12} />
                    <span className='link-name'>Forks</span>
                </a>
                <a href={gist?.comments_url} className='link' target="_blank" rel="noreferrer">
                    <GoComment size={12} />
                    <span className='link-name'>Comments</span>
                </a>
                <a href={gist?.owner?.starred_url} className='link' target="_blank" rel="noreferrer">
                    <MdOutlineStar size={12} />
                    <span>Stars</span>
                </a>
            </div>
        </div>
        <div className='date'>
            <div style={{ marginRight: 4 }}>
                <span>Created at:</span>
                <span style={{ marginLeft: 2 }}>
                    {/* {formatDate(gist?.created_at)} */}
                </span>
            </div>
            <div style={{ marginLeft: 4 }}>
                <span>Last updated:</span>
                <span style={{ marginLeft: 2 }}>
                    {/* {formatDate(gist?.updated_at)} */}
                </span>
            </div>
        </div>
        <div className='description-box'>{gist?.description}</div>
        <div className='file-row'>
            {files.map((name, index) => (
                <div className='card-row' key={`${name + index}`}>
                    <BsFileEarmarkText className='file-icon' />
                    <span>{name}</span>
                </div>
            ))}
        </div>
    </div>
}
export default Gist