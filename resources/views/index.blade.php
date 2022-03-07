<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>tomixy's playground</title>
    <link rel="stylesheet" href="{{ asset('css/destyle.css') }}" />
    <link rel="stylesheet" href="{{ asset('css/materialize.min.css') }}">
    <link rel="stylesheet" href="{{ asset('css/materialize-icon.css')}}"/>
    <link rel="stylesheet" href="{{ asset('css/skeleton.css') }}">
    <link rel="stylesheet" href=" {{ mix('css/styles.css') }}">
    <script src="{{ mix('js/index.js') }}" defer="defer"></script>
</head>
<body>
    <div id="root"></div>
</body>
</html>
