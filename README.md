# Next.js 15 - next/link Unexpected Routing; Missing prefetch prop

This repository demonstrates a potential issue with the `next/link` component in Next.js 15 when the `prefetch` prop is omitted.  While the code might appear functional, omitting `prefetch` can lead to inconsistencies in routing behavior, especially with optimizations like lazy loading.  The solution provides a corrected version that includes the `prefetch` prop to improve performance and consistency.

## Bug
The original code uses the `next/link` component without explicitly setting the `prefetch` property.  This can result in suboptimal performance and inconsistencies, depending on the application's routing and optimization settings.

## Solution
The solution simply adds the `prefetch` property to the `Link` component.  Setting `prefetch={false}` disables prefetching, and `prefetch={true}` enables it (the default).