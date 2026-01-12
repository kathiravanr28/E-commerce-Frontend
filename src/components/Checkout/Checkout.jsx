const Checkout = () => {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Checkout</h2>
      <input className="border p-2 w-full mb-3" placeholder="Name" />
      <input className="border p-2 w-full mb-3" placeholder="Address" />
      <button className="bg-green-600 text-white px-4 py-2 rounded">
        Place Order
      </button>
    </div>
  );
};

export default Checkout;
