const smartgrid = require('smart-grid');
const settings = {
    filename: "smart-grid",
    outputStyle: "scss",
    columns: 12,
    offset: "16px",
    mobileFirst: false,
    container: {
        maxWidth: "1800px",
        fields: "32px"
    },
    breakPoints: {
        xxxl: {
            width: "1800px"
        },
        xxl: {
            width: "1600px"
        },
        xl: {
            width: "1400px"
        },
        lgp: {
            width: "1280px"
        },
        lg: {
            width: "1200px"
        },
        md: {
            width: "1024px",
        },
        sm: {
            width: "768px",
            fields: "16px"
        },
        xs: {
            width: "576px"
        }
    },
    mixinNames: {
        container: "wrapper",
        row: "row-flex",
        rowFloat: "row-float",
        rowInlineBlock: "row-ib",
        rowOffsets: "row-offsets",
        column: "col",
        size: "size",
        columnFloat: "col-float",
        columnInlineBlock: "col-ib",
        columnPadding: "col-padding",
        columnOffsets: "col-offsets",
        shift: "shift",
        from: "from",
        to: "to",
        fromTo: "from-to",
        reset: "reset",
        clearfix: "clearfix",
        debug: "debug"
    },
    tab: "    ",
    defaultMediaDevice: "screen",
    detailedCalc: false
};
smartgrid('./src/styles', settings);