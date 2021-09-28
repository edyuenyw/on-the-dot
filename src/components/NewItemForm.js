function NewItemForm( props ){
  return(
    <div>
      <form>
        <input type="text" name="itemName" placeholder="Item Name" />
        <input type="text" name="startTime" placeholder="Start Time (24 hr format)" />
        <input type="text" name="duration" placeholder="Duration in minutes" />
        <input type="checkbox" />Default
        <button>Add new item</button>
      </form>
    </div>
  ) // return
} // NewItemForm

export default NewItemForm;
