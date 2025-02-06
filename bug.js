```javascript
import Link from 'next/link';

function MyComponent() {
  return (
    <div>
      <Link href="/about">
        <a>About Us</a>
      </Link>
    </div>
  );
}

export default MyComponent;
```
This code uses the `next/link` component, but does not specify the `prefetch` prop.  In Next.js 15, this can lead to unexpected behavior, particularly with lazy loading and improved performance optimizations. While it might seem to work correctly in some scenarios, it may not behave optimally or consistently across different routing situations.