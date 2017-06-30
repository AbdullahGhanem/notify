@section('scripts')
    <script type="text/javascript" charset="utf-8">
        $(function ()
        {
            @if (session('notify.content'))

                Messenger().post({
                    message: "{!! session('notify.content') !!}",
                    type:  "{{ session('notify.type') }}",
                    showCloseButton: "{{ session('notify.closeButton') }}"
                }); 

                var loc = {!!  json_encode(session('notify.location')) !!};
                var style = 'flat';

                var $output = $('.controls output');
                var $lsel = $('.location-selector');
                var $tsel = $('.theme-selector');

                var update = function(){
                    var classes = 'messenger-fixed';

                    for (var i=0; i < loc.length; i++)
                        classes += ' messenger-on-' + loc[i];

                    $.globalMessenger({ extraClasses: classes, theme: style });
                    Messenger.options = { extraClasses: classes, theme: style };

                    $output.text("Messenger.options = {\n    extraClasses: '" + classes + "',\n    theme: '" + style + "'\n}");
                };

                update();

                $lsel.locationSelector()
                .on('update', function(pos){
                    loc = pos;
                    update();
                });

                $tsel.themeSelector({
                    themes: ['flat', 'future', 'block', 'air', 'ice']
                }).on('update', function(theme){
                    style = theme;
                    update();
                });
            @endif
        });
    </script>
@endsection
