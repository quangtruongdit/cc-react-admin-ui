# API

```js
const { isLoading, data } = useQuery({
queryKey: ["allproducts"],
queryFn: () =>
    fetch("http://localhost:8800/api/products").then(
    (res) => res.json()
    ),
});
```