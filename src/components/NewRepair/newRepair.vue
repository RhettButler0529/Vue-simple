<template>
  <div class="p-5 row">
    <div class="col-3">
      <ul class="nav flex-column border">
        <li class="nav-item border">
          <a class="nav-link active" href="#">Repairs</a>
        </li>
        <li class="nav-item border">
          <a class="nav-link" href="#">Addresses</a>
        </li>
        <li class="nav-item border">
          <a class="nav-link" href="#">Profile</a>
        </li>
        <li class="nav-item border">
          <a class="nav-link" href="#">Preferences</a>
        </li>
      </ul>
    </div>
    <div class="col-7 px-lg-2">
      <div class="row py-2">
        <div class="col-6">
          <form class="form-inline">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
          </form>
        </div>
        <div class="col-3"></div>
        <div class="col-3">
          <button class="btn btn-outline-success" type="button">New Repair</button>
        </div>
      </div>
      <table class="table table-hover border">
        <thead>
        <tr>
          <th scope="col">Repair#</th>
          <th scope="col">Serial#</th>
          <th scope="col">Ship To Address</th>
          <th scope="col">Status</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>Text</td>
          <td>Text</td>
          <td>Text</td>
          <td>Text</td>
        </tr>
        <tr>
          <td>Text</td>
          <td>Text</td>
          <td>Text</td>
          <td>Text</td>
        </tr>
        <tr>
          <td>Text</td>
          <td>Text</td>
          <td>Text</td>
          <td>Text</td>
        </tr>
        <tr>
          <td>Text</td>
          <td>Text</td>
          <td>Text</td>
          <td>Text</td>
        </tr>

        </tbody>
      </table>
    </div>
    <div class="col-2">
      <img src="../../assets/logo.png" class="rounded-circle border w-50">
    </div>
  </div>
</template>
<script>

export default {}
</script>
<style></style>