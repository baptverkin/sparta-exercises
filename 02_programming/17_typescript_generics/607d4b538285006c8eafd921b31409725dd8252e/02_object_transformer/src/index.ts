type Product = {
  productName: string;
  quantity: number;
}

const myProduct: Product = {
  productName: "phone",
  quantity: 10
}

function productTransformer (object: Product): [string, string | number ][] {
  console.log(Object.entries(object));
  return Object.entries(object)
}

productTransformer(myProduct);

// Leave the line below for tests to work properly.
export { productTransformer };
