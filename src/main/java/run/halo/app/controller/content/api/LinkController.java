package run.halo.app.controller.content.api;

import static org.springframework.data.domain.Sort.Direction.DESC;

import io.swagger.annotations.ApiOperation;
import java.util.List;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.SortDefault;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import run.halo.app.model.dto.LinkDTO;
import run.halo.app.model.vo.LinkTeamVO;
import run.halo.app.service.LinkService;

/**
 * Content link controller.
 *  友情链接
 * @author johnniang
 * @author ryanwang
 * @date 2019-04-03
 */
@RestController("ApiContentLinkController")
@RequestMapping("/api/content/links")
public class LinkController {

    private final LinkService linkService;

    public LinkController(LinkService linkService) {
        this.linkService = linkService;
    }

    @GetMapping
    @ApiOperation("List all links")
    public List<LinkDTO> listLinks(@SortDefault(sort = "createTime", direction = DESC) Sort sort) {
        return linkService.listDtos(sort);
    }

    @GetMapping("team_view")
    @ApiOperation("List all links with team view")
    public List<LinkTeamVO> listTeamVos(Sort sort) {
        return linkService.listTeamVos(sort);
    }
}
