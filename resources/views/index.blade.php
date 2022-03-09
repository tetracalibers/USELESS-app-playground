<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>tomixy's playground</title>
    <link rel="stylesheet" href="/css/destyle.css" />
    <link rel="stylesheet" href="/css/materialize.min.css">
    <link rel="stylesheet" href="/css/materialize-icon.css"/>
    <link rel="stylesheet" href="/css/skeleton.css">
    <link rel="stylesheet" href="{{ mix('css/styles.css') }}">
    <!-- 3d-react-carousal用アイコン -->
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
    <script src="{{ mix('js/index.js') }}" defer="defer"></script>
</head>
<body>
    <div id="root"></div>
</body>
</html>
