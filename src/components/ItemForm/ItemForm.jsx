import styles from "./ItemForm.module.css"

const ItemForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={styles.container}>
      <label htmlFor="name-input">Name</label>
      <input
        required
        type="text"
        name="name"
        id="name-input"
        value={props.itemForm.name}
        placeholder="Name"
        autoComplete="off"
        onChange={props.handleChange}
      />
      <label htmlFor="category-input">Category</label>
      <select
        required
        name="category"
        id="category-input"
        value={props.itemForm.category}
        onChange={props.handleChange}
      >
        <option value="Apparel">Apparel</option>
        <option value="Arts & Crafts">Arts & Crafts</option>
        <option value="Baby">Baby</option>
        <option value="Beauty & Personal Care">Beauty & Personal Care</option>
        <option value="Electronics">Electronics</option>
        <option value="Everyday Essentials">Everyday Essentials</option>
        <option value="Home & Kitchen">Home & Kitchen</option>
        <option value="Pets">Pets</option>
        <option value="Toys & Games">Toys & Games</option>
        <option value="Other">Other</option>
      </select>
      <label htmlFor="desc-input">Description (optional)</label>
      <textarea
        type="text"
        name="desc"
        id="desc-input"
        value={props.itemForm.desc}
        placeholder="Description"
        onChange={props.handleChange}
      />
      <label htmlFor="url-input">Where to buy</label>
      <input
        required
        type="url"
        name="url"
        id="url-input"
        value={props.itemForm.url}
        placeholder="URL"
        autoComplete="off"
        onChange={props.handleChange}
      />
      <label htmlFor="img-input">Image</label>
      <input
        required
        type="url"
        name="img"
        id="img-input"
        value={props.itemForm.img}
        placeholder="Image URL"
        autoComplete="off"
        onChange={props.handleChange}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default ItemForm;