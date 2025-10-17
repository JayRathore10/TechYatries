import './DropDownService.css';

export function DropDownService() {
  return (
    <>
        <ul class="dropdown-menu">
          <li><a href="#">Book Travel Guide</a></li>
          <li><a href="#">Book Hotel</a></li>
          <li><a href="#"
            className='last-a'
          >Book Ticket</a></li>
        </ul>
    </>
  );
}