import React from 'react'
import SkeletonLoader from './SkeletonLoader'


export const ListSkeleton = () => {
    return (
        <SkeletonLoader>
            <SkeletonLoader.Item />
            <SkeletonLoader.Item />
            <SkeletonLoader.Item />
            <SkeletonLoader.Item />
            <SkeletonLoader.Item />
            <SkeletonLoader.Item />
            <SkeletonLoader.Item />
            <SkeletonLoader.Item />
        </SkeletonLoader>
    )
}
