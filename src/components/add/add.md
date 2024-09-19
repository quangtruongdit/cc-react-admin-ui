# Add product API

```js
const queryClient = useQueryClient();

const mutation = useMutation({
  mutationFn: () => {
    return fetch(`http://localhost:8800/api/${props.slug}s`, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: 111,
        img: "",
        lastName: "Hello",
        firstName: "Test",
        email: "testme@gmail.com",
        phone: "123 456 789",
        createdAt: "01.02.2023",
        verified: true,
      }),
    });
  },
  onSuccess: () => {
    queryClient.invalidateQueries([`all${props.slug}s`]);
  },
});
```

# Call API

```js
mutation.mutate();
```