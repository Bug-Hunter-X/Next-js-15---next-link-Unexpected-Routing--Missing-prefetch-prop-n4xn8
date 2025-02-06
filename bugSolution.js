```javascript
import Link from 'next/link';

function MyComponent() {
  return (
    <div>
      <Link href="/about" prefetch={true}>
        <a>About Us</a>
      </Link>
    </div>
  );
}

export default MyComponent;
```
By adding `prefetch={true}`, we explicitly enable prefetching, ensuring consistent and optimized routing behavior.  This is especially important in Next.js 15, where improvements in routing and lazy loading might reveal inconsistencies if prefetching is not explicitly managed.